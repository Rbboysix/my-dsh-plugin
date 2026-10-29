export const name = 'my-dsh-plugin'

export function apply(ctx) {
  ctx.logger?.info?.('my-dsh-plugin loaded')
}
