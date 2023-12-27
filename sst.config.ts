import { SSTConfig } from "sst";
import { NextjsSite, NextjsSiteProps } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "repro-middleware",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const config: NextjsSiteProps = {
        timeout: 20,
        logging: "combined",
      };
      const site = new NextjsSite(stack, "site", config);

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
