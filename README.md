# CRUD-API-express-mysql
API desenvolvida seguindo este tutorial: https://youtu.be/xGk_R8Q1epU

## DB

```sql
 CREATE TABLE carros (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  modelo VARCHAR(30),
  placa VARCHAR(7)
 );
 
 INSERT INTO carros (modelo, placa) VALUES ("Toyota Corolla", "EMO4929");

```

```
+--------+------------------+---------+
| codigo | modelo           | placa   |
+--------+------------------+---------+
|      1 | Toyota Corolla   | EMO4929 |
+--------+------------------+---------+

