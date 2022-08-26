// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import MyService from "App/Services/MyService";

export default class HellosController {
  public index() {
    new MyService().logContext();
    return "Hello";
  }
}
