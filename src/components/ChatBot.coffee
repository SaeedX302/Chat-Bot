messages = []
input = ''

sendMessage = ->
    messages.push({ text: input, sender: 'user' })
    input = ''
    setTimeout ->
        messages.push({ text: 'Bot Reply', sender: 'bot' })
    , 1000
