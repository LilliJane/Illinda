class WificonsosController < ApplicationController
  before_action :set_wificonso, only: [:show, :edit, :update, :destroy]

  # GET /wificonsos
  # GET /wificonsos.json
  def index
    @wificonsos = Wificonso.all
  end

  # GET /wificonsos/1
  # GET /wificonsos/1.json
  def show
  end

  # GET /wificonsos/new
  def new
    @wificonso = Wificonso.new
  end

  # GET /wificonsos/1/edit
  def edit
  end

  # POST /wificonsos
  # POST /wificonsos.json
  def create
    @wificonso = Wificonso.new(wificonso_params)

    respond_to do |format|
      if @wificonso.save
        format.html { redirect_to @wificonso, notice: 'Wificonso was successfully created.' }
        format.json { render :show, status: :created, location: @wificonso }
      else
        format.html { render :new }
        format.json { render json: @wificonso.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wificonsos/1
  # PATCH/PUT /wificonsos/1.json
  def update
    respond_to do |format|
      if @wificonso.update(wificonso_params)
        format.html { redirect_to @wificonso, notice: 'Wificonso was successfully updated.' }
        format.json { render :show, status: :ok, location: @wificonso }
      else
        format.html { render :edit }
        format.json { render json: @wificonso.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wificonsos/1
  # DELETE /wificonsos/1.json
  def destroy
    @wificonso.destroy
    respond_to do |format|
      format.html { redirect_to wificonsos_url, notice: 'Wificonso was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wificonso
      @wificonso = Wificonso.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wificonso_params
      params.require(:wificonso).permit(:year, :month, :news, :sessions, :hours, :up_b, :down_b, :up_gb, :down_gb)
    end
end
