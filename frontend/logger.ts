import pino from "pino"
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyy HH:MM:ss",
    },
  },
})

export default logger
