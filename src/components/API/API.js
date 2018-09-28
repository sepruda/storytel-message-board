GET /messages
Response:
{
result: [{
    id: number,
    message: string,
    author: number,
}]
}

POST /messages
Request:
{
message: string,
author: number,
}
Response: 204

PUT /messages/{id}
Request:
{
    message: string
}
Response: 204

DELETE /messages/{id}
Response: 204