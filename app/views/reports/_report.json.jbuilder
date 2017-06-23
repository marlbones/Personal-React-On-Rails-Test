json.extract! report, :id, :title, :header_colour, :footer_colour, :created_at, :updated_at
json.url report_url(report, format: :json)
