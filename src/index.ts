import { Context, Logger, Schema, h } from 'koishi'

export const name = 'forum-search'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context, config: Config) {
  ctx.command('search <keyword:text>', { authority: 0 })
    .action(async ({ session }, keyword) => {
      keyword = keyword.replace(/ /g, '%20')
      const url = 'https://forum.koishi.xyz/search?expanded=true&q=' + keyword
      return url
    })
}
