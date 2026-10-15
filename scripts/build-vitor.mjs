import { spawnSync } from 'node:child_process'
import { cpSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const result = spawnSync('npm', ['run', 'build', '--prefix', 'vitor'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: process.platform === 'win32',
})
if (result.error) throw result.error
if (result.status !== 0) process.exit(result.status ?? 1)

cpSync(new URL('../vitor/dist/', import.meta.url), new URL('../dist/vitor/', import.meta.url), {
  recursive: true,
})
