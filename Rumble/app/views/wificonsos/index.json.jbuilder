json.array!(@wificonsos) do |wificonso|
  json.extract! wificonso, :id, :year, :month, :news, :sessions, :hours, :up_b, :down_b, :up_gb, :down_gb
  json.url wificonso_url(wificonso, format: :json)
end
