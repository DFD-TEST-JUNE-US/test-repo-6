require 'sinatra'
require 'open3'

get '/user/:id' do
  # Potential XSS for testing
  "<html><body>User: #{params[:id]}</body></html>"
end

get '/exec' do
  cmd = params[:cmd]
  # Potential command injection for testing
  output = #{cmd}
  output
end

post '/eval' do
  code = params[:code]
  # Potential code injection for testing
  eval(code)
end
