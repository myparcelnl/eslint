import {Linter} from 'eslint';
import {moduleExists} from './moduleExists';

export const overridePluginRule = (ruleName: string, override: Linter.RuleEntry = 'off'): Record<string, Linter.RuleEntry> => {
  const pluginName = ruleName.split('/')[0];

  if (!moduleExists(`eslint-plugin-${pluginName}`)) {
    return {
    };
  }

  return {
    [ruleName]: override,
  };
};
