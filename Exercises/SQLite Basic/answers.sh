"select * from students"

"select * from students where Age > 30"

"select * from students where Gender = 'F' and Age >30"


"select Points from students where Name ='Alex' "


"insert into students values ('8','Nassir', '27','M',200)"


"update students set Points = '400' where Name = 'Basma' "


"update students set Points = '100' where Name = 'Alex' "


"create table graduates(
	ID Integer  Not Null Primary key, Auto incerement,
	Name Text Not Null Unique,
	Age Integer
	Gender Text
	Points Integer
	Graduation Text 
);"


"INSERT INTO graduates (Name,Age ,Gender,Points,Graduation)
VALUES 
   ("layal",18,"F","350","08/09/2018"); "
   

"DELETE from students where Name ='Layal' "


"create table dataInfo(
	name text,
	Compname text,
	cdate text
); "
	

"select employees.Name
from employees
inner join companies on companies.Name = employees.Company where companies.Date < 2000 "


"select companies.Name
from companies
inner join employees on companies.Name = employees.Company where employees.Role = 'Graphic Designer'; "



"
SELECT MAX(Points)
FROM students
"

"
SELECT avg(Points)
FROM students
"

"SELECT COUNT(Points)      
FROM students
where students.Points  == 500;
"



"SELECT students.Name
FROM students AS S INNER JOIN students "





"SELECT * FROM students
ORDER BY Points DESC; "







