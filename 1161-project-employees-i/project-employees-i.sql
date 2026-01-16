# Write your MySQL query statement below
select  p.project_id ,round(avg(a.experience_years),2) as average_years  from Project p join Employee a on p.employee_id=a.employee_id group by  project_id