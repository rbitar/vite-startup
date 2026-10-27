import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

export function ApiTerminal() {
  return (
    <div className="flex flex-1 items-center justify-center overflow-hidden bg-background p-5 sm:p-10">
      <Terminal className="max-w-xl bg-background shadow-[0_24px_70px_rgba(0,0,0,.12)]" sequence>
        <TypingAnimation duration={22}>
          {"> curl https://api.vertex.ai/v1/chat/completions \\"}
        </TypingAnimation>
        <AnimatedSpan className="text-muted-foreground">
          {`  -d '{ "model": "vertex/auto", "messages": [...] }'`}
        </AnimatedSpan>
        <AnimatedSpan className="text-blue-500">
          → evaluating 14 available models
        </AnimatedSpan>
        <AnimatedSpan className="text-blue-600 dark:text-blue-400">
          → route selected: anthropic/claude-sonnet
        </AnimatedSpan>
        <AnimatedSpan className="text-emerald-500">
          ✓ response streamed in 342ms
        </AnimatedSpan>
        <TypingAnimation duration={18} className="text-muted-foreground">
          One endpoint. Any model. No rewrites.
        </TypingAnimation>
      </Terminal>
    </div>
  )
}
