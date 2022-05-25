// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `<strong>Hey, I'm ${config.name}</strong>. 
This is my super-cool website, made to look as if you're SSH'd as a root user on a linux machin
Check out some of the commands for you to play with by typing 'help'.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const youtube = async (args: string[]): Promise<string> => {
  window.open(`https://youtube.com/${config.social.youtube}/`);
  return 'Opening youtube...';
};

export const discord = async (args: string[]): Promise<string> => {
  window.open(`https://discord.gg/${config.social.discord}/`);
  return 'Opening discord...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `no directories here...`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `you were probably expecting something to happen... sorry.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ██╗░░██╗███████╗██╗░░░██╗░░░    ██╗██╗███╗░░░███╗    ██╗░░██╗██╗██████╗░░█████╗░███╗░░██╗
  ██║░░██║██╔════╝╚██╗░██╔╝░░░    ██║╚█║████╗░████║    ██║░██╔╝██║██╔══██╗██╔══██╗████╗░██║
  ███████║█████╗░░░╚████╔╝░░░░    ██║░╚╝██╔████╔██║    █████═╝░██║██████╔╝███████║██╔██╗██║
  ██╔══██║██╔══╝░░░░╚██╔╝░░██╗    ██║░░░██║╚██╔╝██║    ██╔═██╗░██║██╔══██╗██╔══██║██║╚████║
  ██║░░██║███████╗░░░██║░░░╚█║    ██║░░░██║░╚═╝░██║    ██║░╚██╗██║██║░░██║██║░░██║██║░╚███║
  ╚═╝░░╚═╝╚══════╝░░░╚═╝░░░░╚╝    ╚═╝░░░╚═╝░░░░░╚═╝    ╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝

Type 'help' to see the list of available commands.
Type 'github' for my github profile.
Type 'discord' for a link to join my server.
`;
};
