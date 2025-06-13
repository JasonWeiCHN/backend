import requests
from datetime import datetime, timedelta
import json

API_URL = "http://localhost:8080/api/accounting" # 后端接口地址
JSON_FILE = "data2.json"  # JSON 文件路径

def parse_datetime(date_str, time_str):
    try:
        date_obj = datetime.strptime(date_str, "%Y%m%d")
    except Exception as e:
        raise ValueError(f"日期格式错误: '{date_str}'，错误: {e}")

    if not time_str or not isinstance(time_str, str):
        raise ValueError(f"时间字段无效: '{time_str}'")

    try:
        if '-' in time_str:
            start_time_str, end_time_str = time_str.split('-', 1)
            start_time_str = start_time_str.strip()
            end_time_str = end_time_str.strip()

            if not end_time_str:
                print(f"[警告] 订单时间缺失结束时间，将默认加2小时: '{time_str}'")
                start_dt = datetime.strptime(start_time_str, "%H:%M").replace(
                    year=date_obj.year, month=date_obj.month, day=date_obj.day)
                end_dt = start_dt + timedelta(hours=2)
            else:
                start_dt = datetime.strptime(start_time_str, "%H:%M").replace(
                    year=date_obj.year, month=date_obj.month, day=date_obj.day)
                end_dt = datetime.strptime(end_time_str, "%H:%M").replace(
                    year=date_obj.year, month=date_obj.month, day=date_obj.day)
                if end_dt <= start_dt:
                    end_dt += timedelta(days=1)
        else:
            time_str = time_str.strip()
            if not time_str:
                raise ValueError(f"时间格式错误，时间为空: '{time_str}'")
            start_dt = datetime.strptime(time_str, "%H:%M").replace(
                year=date_obj.year, month=date_obj.month, day=date_obj.day)
            end_dt = start_dt

        return start_dt, end_dt

    except Exception as e:
        raise ValueError(f"时间解析失败: '{time_str}'，错误: {e}")

def calculate_duration_hours(start_dt, end_dt):
    delta = end_dt - start_dt
    return round(delta.total_seconds() / 3600, 2)

def convert_order_to_request(date_str, order):
    try:
        time_str = order.get("time")
        if not time_str or not isinstance(time_str, str):
            raise ValueError(f"订单缺少有效时间字段: {order}")

        start_dt, end_dt = parse_datetime(date_str, time_str)
        duration = calculate_duration_hours(start_dt, end_dt)

        game = order.get("game")
        if not game or not isinstance(game, str):
            game = "未知游戏"

        return {
            "startDateTime": start_dt.isoformat(),
            "endDateTime": end_dt.isoformat(),
            "duration": duration,
            "consoleType": "",
            "gameNames": [game],
            "customerType": order.get("customer", "") or "",
            "isReturning": False,
            "actualAmount": order.get("amount", 0),  # 设置默认值
            "platform": "",
            "contactType": "",
            "contactValue": "",
            "remark": order.get("remarks", "") or ""
        }

    except Exception as e:
        raise ValueError(f"[转换失败] 日期: {date_str}, 订单: {order}, 错误: {e}")

def main():
    # 从文件读取 JSON 数据
    try:
        with open(JSON_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"[错误] 读取 JSON 文件失败: {e}")
        return

    all_requests = []
    for date_str, day_data in data.items():
        orders = day_data.get("orders", [])
        for order in orders:
            try:
                req_body = convert_order_to_request(date_str, order)
                all_requests.append(req_body)
            except Exception as e:
                print(f"[跳过] 解析失败: {e}")

    print(f"\n✅ 共准备发送 {len(all_requests)} 条记录\n")

    for i, req in enumerate(all_requests, 1):
        print(f"📤 发送第{i}条数据: {req}")
        try:
            response = requests.post(API_URL, json=req)
            if response.status_code in (200, 201):
                print(f"✅ 成功: {response.json()}")
            else:
                print(f"❌ 失败 状态码: {response.status_code} 内容: {response.text}")
        except Exception as e:
            print(f"❌ 请求失败: {e}")

if __name__ == "__main__":
    main()
