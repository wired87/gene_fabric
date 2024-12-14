export interface IntegrationTypes {
  title: string;
  src: string;
  exp: string;
  category: string;
  url: string;
}

// todo html preprocess extraction

export interface CategoryTypes {
  checked: boolean,
  title: string;
  checkCol: string;
}

export const CATEGORIES: CategoryTypes[] = [
  {
    title: "Productivity",
    checked: true,
    checkCol: "blue"
  },
  {
    title: "Channels",
    checked: false,
    checkCol: "white"
  },
  {
    title: "Automation",
    checked: false,
    checkCol: "white"
  },{
    title: "Development",
    checked: false,
    checkCol: "white"
  },
]
export const DEVELOPMENT: IntegrationTypes[] = [
  {
    title: "Messaging API",
    src: "/images/integrations/api.png",
    exp: "This integration allows you to easily send messages to your bot and get responses back to your endpoint.",
    category: "messaging",
    url: "https://www.mediawiki.org/wiki/Manual:Messages_API"
  },

  {
    title: "Webhook",
    src: "/images/integrations/webhook.svg",
    exp: "Connect your chatbot to your systems with webhooks. Send and receive data from external systems and trigger workflows effortlessly.",
    category: "automation",
    url: "https://de.wikipedia.org/wiki/Webhooks"
  },
  {
    title: "DALL-E Image Generation",
    src: "/images/integrations/fb_msg.png",
    exp: "Integrate DALL-E to generate stunning and unique images directly within your chatbot conversations",
    category: "automation",
    url: "https://openai.com/index/dall-e-3/"
  },

  {
    title: "AWS S3",
    src: "/images/integrations/s3.png",
    exp: "Empower your BotWorld chatbot with AWS S3 to manage cloud storage. Create, list, and delete S3 buckets, and handle files directly through your chatbot. Ideal for automating cloud workflows.",
    category: "cloud storage",
    url: "https://aws.amazon.com/"
  },


];
export const CHANNELS: IntegrationTypes[] = [

  {
    title: "Zendesk",
    src: "/images/integrations/zapier.png",
    exp: "Optimize your support workflow using Zendesk. Seamlessly integrate your chatbot into Zendesk chat, enabling you to trigger workflows from ticket updates. Easily manage tickets, access conversations, and engage with customers",
    category: "channels",
    url: "https://www.zendesk.de/"
  },
  {
    title: "WhatsApp",
    src: "/images/integrations/wa.png",
    exp: "This integration allows your bot to interact with WhatsApp.",
    category: "channels",
    url: "https://web.whatsapp.com/"
  },

  {
    title: "Telegram",
    src: "/images/integrations/tg.png",
    exp: "This integration allows your bot to interact with Telegram.",
    category: "channels",
    url: "https://www.telegram.com"
  },
  {
    title: "Microsoft Teams",
    src: "/images/integrations/teams.svg",
    exp: "This integration allows your bot to interact with Microsoft Teams.",
    category: "channels",
    url: "https://www.microsoft.com/de-de/microsoft-teams/log-in"
  },

  {
    title: "Slack",
    src: "/images/integrations/slack.png",
    exp: "This integration allows your bot to interact with Slack.",
    category: "channels",
    url: "https://slack.com/intl/de-de/"
  },
  {
    title: "Messenger",
    src: "/images/integrations/fb_msg.png",
    exp: "This integration allows your bot to interact with Messenger.",
    category: "channels",
    url: "https://www.messenger.com/"
  },

  {
    title: "Intercom",
    src: "/images/integrations/icom.svg",
    exp: "This integration allows your bot to interact with Intercom.",
    category: "channels",
    url: "https://www.intercom.com/"
  },
  {
    title: "Instagram",
    src: "/images/integrations/insta.png",
    exp: "This integration allows your bot to interact with Instagram.",
    category: "channels",
    url: "https://www.instagram.com/"
  },
  {
    title: "Webchat",
    src: "/images/integrations/webchat.png",
    exp: "Webchat integration for BotWorld",
    category: "channels",
    url: ""
  }
];

export const PRODUCTIVITY: IntegrationTypes[] = [

  {
    title: "Calendly",
    src: "/images/integrations/cl.png",
    exp: "This integration allows you to schedule events with Calendly.",
    category: "productivity",
    url: "https://calendly.com/"
  },
  {
    title: "Notion",
    src: "/images/integrations/not.svg",
    exp: "Supercharge your productivity with Notion integration. Add pages and comments, manage databases, and engage in discussions—all within your chatbot",
    category: "productivity",
    url: "https://www.notion.so/de-de"
  },
  {
    title: "Slack",
    src: "/images/integrations/slack.png",
    exp: "This integration allows your bot to interact with Slack.",
    category: "productivity",
    url: "https://slack.com/intl/de-de/"
  },
  {
    title: "Microsoft Teams",
    src: "/images/integrations/teams.svg",
    exp: "This integration allows your bot to interact with Microsoft Teams.",
    category: "productivity",
    url: "https://www.microsoft.com/de-de/microsoft-teams/log-in"
  },

];
export const AUTOMATION: IntegrationTypes[] = [

  {
    title: "SendGrid",
    src: "/images/integrations/sendg.svg",
    exp: "This integration allows you to send emails with SendGrid.",
    category: "automation",
    url: "https://www.sendgrid.com"
  },
  {
    title: "Calendly",
    src: "/images/integrations/cl.png",
    exp: "This integration allows you to schedule events with Calendly.",
    category: "automation",
    url: "https://calendly.com/"
  },

  {
    title: "Webhook",
    src: "/images/integrations/webhook.svg",
    exp: "Connect your chatbot to your systems with webhooks. Send and receive data from external systems and trigger workflows effortlessly.",
    category: "automation",
    url: "https://de.wikipedia.org/wiki/Webhooks"
  }
];
