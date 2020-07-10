SELECT
	r.id,
	r.comment_id,
	o.avatar_url,
	o. NAME reply_name,
	r.content,
	r.created_time,
	o.location address,
	r.reply_type,
	r.reply_id
FROM
	replies r
LEFT JOIN oauth_users o ON r.from_uid = o.id
WHERE
	r.comment_id IN (2, 1)



SELECT
	c.id,
	o.avatar_url,
	o. NAME reply_name,
	c.content,
	c.created_time,
	o.location address
FROM
	comments c
LEFT JOIN oauth_users o ON c.from_uid = o.id
WHERE
	c.article_id = 5
ORDER BY
	c.created_time DESC
LIMIT 0,
 2