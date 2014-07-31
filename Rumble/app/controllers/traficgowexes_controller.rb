class TraficgowexesController < ApplicationController
  before_action :set_traficgowex, only: [:show, :edit, :update, :destroy]

  # GET /traficgowexes
  # GET /traficgowexes.json
  def index
    @traficgowexes = Traficgowex.all
  end

  # GET /traficgowexes/1
  # GET /traficgowexes/1.json
  def show
  end

  # GET /traficgowexes/new
  def new
    @traficgowex = Traficgowex.new
  end

  # GET /traficgowexes/1/edit
  def edit
  end

  # POST /traficgowexes
  # POST /traficgowexes.json
  def create
    @traficgowex = Traficgowex.new(traficgowex_params)

    respond_to do |format|
      if @traficgowex.save
        format.html { redirect_to @traficgowex, notice: 'Traficgowex was successfully created.' }
        format.json { render :show, status: :created, location: @traficgowex }
      else
        format.html { render :new }
        format.json { render json: @traficgowex.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /traficgowexes/1
  # PATCH/PUT /traficgowexes/1.json
  def update
    respond_to do |format|
      if @traficgowex.update(traficgowex_params)
        format.html { redirect_to @traficgowex, notice: 'Traficgowex was successfully updated.' }
        format.json { render :show, status: :ok, location: @traficgowex }
      else
        format.html { render :edit }
        format.json { render json: @traficgowex.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /traficgowexes/1
  # DELETE /traficgowexes/1.json
  def destroy
    @traficgowex.destroy
    respond_to do |format|
      format.html { redirect_to traficgowexes_url, notice: 'Traficgowex was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_traficgowex
      @traficgowex = Traficgowex.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def traficgowex_params
      params.require(:traficgowex).permit(:date, :hour, :avrcv, :minrcv, :maxrcv, :avtr, :mintr, :maxtr)
    end
end
