import * as core from '@actions/core'
import publisher from 'goreleaser-npm-publisher'
import { GithubActionExecContext } from './logger'

export async function run(): Promise<void> {
  const context = new GithubActionExecContext()
  try {
    const options = {
      project: core.getInput('project') ?? './',
      builder: core.getInput('builder'),
      description: core.getInput('builder'),
      prefix: core.getInput('builder'),
      files: core.getMultilineInput('files')
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await publisher(context, options as any)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    core.setFailed(error.toString())
  }
}
