-- 订单信息表:
CREATE TABLE IF NOT EXISTS public.order_info (
    id SERIAL PRIMARY KEY,
    saas_id TEXT,
    store_id TEXT,
    store_name TEXT,
    uid TEXT,
    parent_order_no TEXT,
    order_id TEXT,
    order_no TEXT,
    order_type INTEGER,
    order_sub_type INTEGER,
    order_status INTEGER,
    order_sub_status INTEGER,
    total_amount TEXT,
    goods_amount TEXT,
    goods_amount_app TEXT,
    payment_amount TEXT,
    freight_fee TEXT,
    package_fee TEXT,
    discount_amount TEXT,
    channel_type INTEGER,
    channel_source TEXT,
    channel_identity TEXT,
    remark TEXT,
    cancel_type INTEGER,
    cancel_reason_type INTEGER,
    cancel_reason TEXT,
    rights_type INTEGER,
    create_time TEXT,
    auto_cancel_time TEXT,
    coupon_amount TEXT,
    order_status_name TEXT,
    order_satus_remark TEXT
);

-- 订单商品信息表:
CREATE TABLE IF NOT EXISTS public.order_item_info (
    id SERIAL PRIMARY KEY,
    order_id TEXT REFERENCES public.order_info (order_id),
    spu_id TEXT,
    sku_id TEXT,
    room_id TEXT,
    goods_main_type INTEGER,
    goods_vice_type INTEGER,
    goods_name TEXT,
    goods_picture_url TEXT,
    origin_price TEXT,
    actual_price TEXT,
    buy_quantity INTEGER,
    item_total_amount TEXT,
    item_discount_amount TEXT,
    item_payment_amount TEXT,
    goods_payment_price TEXT,
    tag_price TEXT,
    tag_text TEXT,
    out_code TEXT
);

-- 订单商品规格信息表:
CREATE TABLE IF NOT EXISTS public.order_item_spec_info (
    id SERIAL PRIMARY KEY,
    order_item_id INTEGER REFERENCES public.order_item_info (id),
    spec_title TEXT,
    spec_value TEXT
);

-- 订单物流信息表:
CREATE TABLE IF NOT EXISTS public.order_logistics_info (
    id SERIAL PRIMARY KEY,
    order_id TEXT REFERENCES public.order_info (order_id),
    logistics_type INTEGER,
    logistics_no TEXT,
    logistics_status INTEGER,
    logistics_company_code TEXT,
    logistics_company_name TEXT,
    receiver_address_id TEXT,
    province_code TEXT,
    city_code TEXT,
    country_code TEXT,
    receiver_province TEXT,
    receiver_city TEXT,
    receiver_country TEXT,
    receiver_area TEXT,
    receiver_address TEXT,
    receiver_post_code TEXT,
    receiver_longitude TEXT,
    receiver_latitude TEXT,
    receiver_identity TEXT,
    receiver_phone TEXT,
    receiver_name TEXT,
    expect_arrival_time TEXT,
    sender_name TEXT,
    sender_phone TEXT,
    sender_address TEXT,
    send_time TEXT,
    arrival_time TEXT
);

-- 订单支付信息表:

CREATE TABLE IF NOT EXISTS public.order_payment_info (
    id SERIAL PRIMARY KEY,
    order_id TEXT REFERENCES public.order_info (order_id),
    pay_status INTEGER,
    amount TEXT,
    currency TEXT,
    pay_type TEXT,
    pay_way TEXT,
    pay_way_name TEXT,
    interact_id TEXT,
    trace_no TEXT,
    channel_trx_no TEXT,
    period TEXT,
    pay_time TEXT,
    pay_success_time TEXT
);