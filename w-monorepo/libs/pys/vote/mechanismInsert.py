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
    mechanisms_data = [
        ('hard-to-fight', '强悍的敌人'),
        ('easy-to-fight', '弱小的敌人'),
        # Add more mechanisms as needed
    ]

    for mechanism_id, mechanism_name in mechanisms_data:
        insert_mechanism(mechanism_id, mechanism_name)
