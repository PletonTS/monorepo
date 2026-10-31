import {Application, PletonApplication} from "@pleton/core";

@Application()
export class Playground extends PletonApplication {
  async run(): Promise<void> {
    console.log(`Running my app`);
  }
}