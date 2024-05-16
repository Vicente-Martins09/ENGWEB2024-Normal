import json
import csv


def csv_to_json(csv_file):
    # Lista para armazenar os dicionários de cada linha do CSV
    data = []

    # Abre o arquivo CSV e lê seus dados
    with open(csv_file, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            # Adiciona cada linha como um dicionário à lista de dados
            data.append(row)

    return data

def main():
    csv_file = 'contratos2024.csv'  # Substitua 'dados.csv' pelo nome do seu arquivo CSV
    json_data = csv_to_json(csv_file)

    # Escreve os dados convertidos em JSON para um arquivo de saída
    with open('contratos2024.json', 'w', encoding='utf-8') as jsonfile:
        json.dump(json_data, jsonfile, ensure_ascii=False, indent=4)

    print("CSV convertido para JSON com sucesso!")

if __name__ == "__main__":
    main()