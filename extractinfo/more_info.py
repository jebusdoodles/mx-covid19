import pandas as pd

#Encoding CSV para que se pueda leer
df = pd.read_csv("covidata.csv", encoding = "ISO-8859-1")

file_name = 'tlaxcala.csv'

#Traeme de esta entidad lo que como resultado den positivo
df = df[(df['ENTIDAD_UM'] == 29) & (df['RESULTADO'] == 1)]

df.to_csv(file_name, sep=',', encoding='utf-8')
#lenght 
print(df.shape[0])