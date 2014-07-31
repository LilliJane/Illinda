json.array!(@traficgowexes) do |traficgowex|
  json.extract! traficgowex, :id, :date, :hour, :avrcv, :minrcv, :maxrcv, :avtr, :mintr, :maxtr
  json.url traficgowex_url(traficgowex, format: :json)
end
