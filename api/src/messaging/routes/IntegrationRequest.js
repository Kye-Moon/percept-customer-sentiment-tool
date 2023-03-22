const rabbitAPIPrefix = "/api/messaging"

// Publish message to queue
module.exports = async function (fastify,opts){
  fastify.get(`${rabbitAPIPrefix}/integration-request`, async function (req, reply) {
    const channel = this.rabbit.channel

    // Create queue if it does not exist
    const queue = 'integration-requests'
    const ok = await channel.assertQueue(queue,{
      durable:false
    })

    const msg = JSON.stringify(req.query)

    if (!ok) {
      fastify.log.info(`${queue} queue is not available`)
    }

    // Push message to queue
    try {
      await channel.sendToQueue(queue, Buffer.from(msg))
      reply.send('Integration Request Sent')
      return "sent"
    } catch (err) {
      reply.log.error(err)
    }
  })
}


