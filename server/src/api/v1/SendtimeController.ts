import {Get, Post, JsonController, Param, Body, Req, UseBefore} from 'routing-controllers';
import {JSONWebToken} from '../../utils/JSONWebToken';
import {Thing} from '../../entities/thing.model';
import {UserAuthenticatorMiddleware} from '../../middleware/UserAuthenticatorMiddleware';
import {CORSMiddleware} from '../../middleware/CORSMiddleware';
import {Service} from 'typedi';
import {LoggerFactory} from '../../utils/LoggerFactory';

@JsonController('/sendtime')
@UseBefore(UserAuthenticatorMiddleware, CORSMiddleware)
@Service()
export class SendtimeController {

    public constructor(private loggerFactory: LoggerFactory) { }

    @Get('/:id')
    public getThingsByUserID(@Param('amount') amount: string, @Req() request: any): any {
        let enrollmentID = new JSONWebToken(request).getUserID();

        let thing = new Thing(amount, enrollmentID);
        this.loggerFactory.create().debug('TEMP: sendtime get body: ', thing);

        return request.blockchain.invoke('createThing', [JSON.stringify(thing)], enrollmentID);
    }

    @Post('/')
    public post(@Body() thing: JSON, @Req() request: any): any {
        let enrollmentID = new JSONWebToken(request).getUserID();
        return request.blockchain.invoke('createThing', [JSON.stringify(thing)], enrollmentID);
    }
}