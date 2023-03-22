import {APIGatewayEvent} from "aws-lambda";

  export function buildResponse(message: string, event: APIGatewayEvent) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: message,
        input: event
      })
    }
}
