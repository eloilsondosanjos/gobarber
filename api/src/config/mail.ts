interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'eloilson@solidtecnologias.com.br',
      name: 'Eloilson - Solid Tecnologias',
    },
  },
} as IMailConfig;
