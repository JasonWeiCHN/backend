from bs4 import BeautifulSoup
import json

def parse_html_to_json(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    data = {}

    def get_text(element):
        return element.text.strip() if element else ""

    def get_img_alt(element):
        return element.find('img')['alt'] if element and element.find('img') else ""

    def get_img_src(element):
        return element.find('img')['src'] if element and element.find('img') else ""

    # Name
    name = get_text(soup.find('div', {'col-id': 'name'}))
    data['name'] = name

    # Factions
    factions = soup.find('div', {'col-id': 'factions'})
    faction_name = get_img_alt(factions)
    faction_icon = get_img_src(factions)
    data['factions'] = {
        'name': faction_name,
        'icon': faction_icon
    }

    # Caste
    caste = get_text(soup.find('div', {'col-id': 'caste'}))
    data['caste'] = caste

    # Is Large
    is_large = soup.find('div', {'col-id': 'is_large'})
    is_large_value = "Yes" if is_large and is_large.find('img') else "No"
    is_large_icon = get_img_src(is_large)
    data['is_large'] = {
        'value': is_large_value,
        'icon': is_large_icon
    }

    # Unit Size
    unit_size = int(get_text(soup.find('div', {'col-id': 'unit_size'})))
    data['unit_size'] = unit_size

    # Health
    health = int(get_text(soup.find('div', {'col-id': 'health'})))
    data['health'] = health

    # Barrier Health
    barrier_health = int(get_text(soup.find('div', {'col-id': 'barrier_health'})))
    data['barrier_health'] = barrier_health

    # Armour
    armour = int(get_text(soup.find('div', {'col-id': 'armour'})))
    data['armour'] = armour

    # Leadership
    leadership = int(get_text(soup.find('div', {'col-id': 'leadership'})))
    data['leadership'] = leadership

    # Speed
    speed = int(get_text(soup.find('div', {'col-id': 'speed'})))
    data['speed'] = speed

    # Melee Attack
    melee_attack = soup.find('div', {'col-id': 'melee_attack'})
    melee_attack_value = int(get_text(melee_attack).split()[-1]) if melee_attack else 0
    melee_attack_icon = get_img_src(melee_attack)
    data['melee_attack'] = {
        'value': melee_attack_value,
        'effect': get_img_alt(melee_attack).split('_')[-1] if melee_attack else "",
        'icon': melee_attack_icon
    }

    # Can Siege
    can_siege = soup.find('div', {'col-id': 'can_siege'})
    can_siege_value = "Yes" if can_siege and can_siege.find('img') else "No"
    can_siege_icon = get_img_src(can_siege)
    data['can_siege'] = {
        'value': can_siege_value,
        'icon': can_siege_icon
    }

    # Melee Defence
    melee_defence = int(get_text(soup.find('div', {'col-id': 'melee_defence'})))
    data['melee_defence'] = melee_defence

    # Primary Melee Weapon Damage
    primary_melee_weapon_damage = int(get_text(soup.find('div', {'col-id': 'primary_melee_weapon.damage'})))
    data['primary_melee_weapon'] = {
        'damage': primary_melee_weapon_damage
    }

    # Charge Bonus
    charge_bonus = int(get_text(soup.find('div', {'col-id': 'charge_bonus'})))
    data['charge_bonus'] = charge_bonus

    # Primary Missile Weapon Ammo
    primary_missile_weapon_ammo = int(get_text(soup.find('div', {'col-id': 'primary_missile_weapon.ammo'})))
    data['primary_missile_weapon'] = {
        'ammo': primary_missile_weapon_ammo,
        'projectile_range': int(get_text(soup.find('div', {'col-id': 'primary_missile_weapon.projectile.range'}))),
        'damage': None
    }

    # Multiplayer Cost
    multiplayer_cost = int(get_text(soup.find('div', {'col-id': 'multiplayer_cost'})))
    data['multiplayer_cost'] = multiplayer_cost

    # Singleplayer Cost
    singleplayer_cost = int(get_text(soup.find('div', {'col-id': 'singleplayer_cost'})))
    data['singleplayer_cost'] = singleplayer_cost

    # Singleplayer Upkeep
    singleplayer_upkeep = int(get_text(soup.find('div', {'col-id': 'singleplayer_upkeep'})))
    data['singleplayer_upkeep'] = singleplayer_upkeep

    # Create Time
    create_time = int(get_text(soup.find('div', {'col-id': 'create_time'})))
    data['create_time'] = create_time

    # Category
    category = soup.find('div', {'col-id': 'category'})
    category_name = get_img_alt(category.find('img', {'class': 'cat_icon'}))
    category_icon_holder = get_img_src(category.find('img', {'class': 'cat_holder'}))
    category_icon = get_img_src(category.find('img', {'class': 'cat_icon'}))
    data['category'] = {
        'name': category_name,
        'icon_holder': category_icon_holder,
        'icon': category_icon
    }

    return data

def read_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def save_json(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)

def main():
    input_file = 'input.html'  # Change this to your input HTML file path
    output_file = 'output.json'  # Change this to your desired output JSON file path

    html_content = read_html_file(input_file)
    parsed_data = parse_html_to_json(html_content)
    save_json(parsed_data, output_file)

    print(f"JSON data has been saved to '{output_file}'")

if __name__ == "__main__":
    main()
