class V1::ThingsController < ApplicationController
  def index
    render json: {things: [
      {
        name: 'Name',
        guid: '5asfd5ds6fsdf545sd6ghfsd'
      }
    ]
    }.to_json
  end
end
