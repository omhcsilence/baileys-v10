/**
 * Banner ringkas yang tampil sekali di console saat makeWASocket pertama kali dipanggil.
 * Matikan dengan makeWASocket({ ..., showBanner: false })
 */
const INFO_LINES: string[] = [
	'  OmhcSilence / Baileys V10.07.98',
	'  Lightweight WhatsApp Web API — modded & maintained by OmhcSilence',
	'',
	'  ❏ Features   : RichMessage · CustomPairing · Extended Mods',
	'  ❏ Developer  : OmhcSilence',
	'  ❏ Channel    : @kiuchan11  ·  https://t.me/kiuchan11',
	'  ❏ Status     : Ready'
]

let shown = false

export const showBanner = (config?: any) => {
	try {
		if (shown || config?.showBanner === false) return
		shown = true

		const color = !!process.stdout?.isTTY && !process.env.NO_COLOR
		const paint = (text: string, code: string): string =>
			color ? `\x1b[${code}m${text}\x1b[0m` : text

		const width = 62
		const top = '╭' + '─'.repeat(width) + '╮'
		const bottom = '╰' + '─'.repeat(width) + '╯'

		const out = [
			'',
			paint(top, '90'),
			...INFO_LINES.map((l, i) =>
				paint('│', '90') +
				' ' +
				paint(l.padEnd(width - 1), i === 0 ? '37;1' : '37') +
				paint('│', '90')
			),
			paint(bottom, '90'),
			''
		]
		console.log(out.join('\n'))
	} catch {
		// abaikan, banner tidak boleh bikin bot error
	}
}