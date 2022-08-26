import HttpContext from "@ioc:Adonis/Core/HttpContext";

export default class MyService {
  public logContext() {
    console.log(HttpContext.get());
  }
}
