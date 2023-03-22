module.exports = async function (fastify, opts) {

// Consume messages from queue
  fastify.register(async function (fastify, opts) {
    const channel = fastify.rabbit.channel
    const queue = 'integration-requests'
    // Create queue if it does not exist
    const ok = await channel.assertQueue(queue,{
      durable: false
    })
    if (ok) {
      // start consuming queue
      channel.consume(queue, msg => {
        fastify.log.info(msg.content.toString())
        channel.ack(msg)
      })
    }
  })

}

