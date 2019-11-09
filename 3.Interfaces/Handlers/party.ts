import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';

import { getPartyUsecase } from "../../1.UseCases/Party/createPartyUsecase";

export const create: APIGatewayProxyHandler = async (event, _context) => {
    return createPartyUsecase(event.body)
}

export const list: APIGatewayProxyHandler = async (event, _context): APIGatewayProxyResult => {
    return listPartiesUsecase(event)
}

export const get: APIGatewayProxyHandler = async (event, _context): Promise<APIGatewayProxyResult> => {

    const id = Number.parseInt(event.pathParameters.id)
    let item: {}
    try {
        item = getPartyUsecase(id)
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'There`s an error while trying to get the Party'
            })
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify(item)
    }
}

export const update: APIGatewayProxyHandler = async (event, _context) => {
    return updatePartyUsecase(event)
}

export const remove: APIGatewayProxyHandler = async (event, _context) => {
    return removePartyUsecase(event)
}