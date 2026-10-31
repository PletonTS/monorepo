import {Controller, Get, Post} from "@pleton/core";

@Controller("/greeting")
export class GreetingController {
  @Get("/")
  async get() {
    return "Hello World";
  }

  @Post("/")
  async post() {
    return "Hello Post!";
  }
}