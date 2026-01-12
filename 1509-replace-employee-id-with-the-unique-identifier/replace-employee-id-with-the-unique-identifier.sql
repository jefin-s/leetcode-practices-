# Write your MySQL query statement below
select k.name, e.unique_id from Employees k left join EmployeeUNI e on k.id=e.id