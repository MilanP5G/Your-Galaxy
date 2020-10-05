json.extract! phone, :id, :title, :image, :pros, :cons, :created_at, :updated_at
json.url phone_url(phone, format: :json)
