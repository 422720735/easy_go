```sql
-- SELECT articles.*,IFNULL(systems.top_id, 0) FROM articles LEFT JOIN systems ON articles.id = systems.id  ORDER BY systems.created_time desc,articles.hot desc 

-- SELECT *, IFNULL(systems.top_id, 0) from systems

-- select 字段列表 from table1 别名1 left join table2 别名2 on 连接条件 [where 子句]

-- SELECT * from articles where menu_id = 1


-- SELECT articles.*,IFNULL(systems.top_id, 0) FROM articles LEFT JOIN systems ON articles.id = systems.id  ORDER BY systems.created_time desc,articles.hot desc 

SELECT articles.*,IFNULL(systems.top_id, 0) FROM articles LEFT JOIN systems ON articles.id = systems.id WHERE 1 ORDER BY systems.created_time desc,articles.hot desc LIMIT 0, 2 
```