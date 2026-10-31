import {Application, Decorator, PletonApplication} from "@pleton/core";

@Application()
export class Playground extends PletonApplication {
  async run(): Promise<void> {
    await this.http.listen(8080);
  }
}