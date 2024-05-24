from pymongo import MongoClient

APP_NAME = 'warhammer3'


def insert_mechanism(mechanism_id, name):
  client = MongoClient('mongodb://localhost:27017/')
  db = client['voting_system_' + APP_NAME]
  mechanisms = db['mechanisms']

  mechanism = {
    "id": mechanism_id,
    "name": name
  }

  result = mechanisms.insert_one(mechanism)
  if result.acknowledged:
    print(f"Mechanism '{name}' with ID '{mechanism_id}' added successfully.")
  else:
    print(f"Failed to add mechanism.")


if __name__ == '__main__':
  mechanism_id = 'popularity'  # 手动设置的 Mechanism ID
  mechanism_name = '人气值'  # Mechanism 的名称
  insert_mechanism(mechanism_id, mechanism_name)
