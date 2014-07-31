class WifiusersController < ApplicationController
  before_action :set_wifiuser, only: [:show, :edit, :update, :destroy]

  # GET /wifiusers
  # GET /wifiusers.json
  def index
    @wifiusers = Wifiuser.all
  end

  # GET /wifiusers/1
  # GET /wifiusers/1.json
  def show
  end

  # GET /wifiusers/new
  def new
    @wifiuser = Wifiuser.new
  end

  # GET /wifiusers/1/edit
  def edit
  end

  # POST /wifiusers
  # POST /wifiusers.json
  def create
    @wifiuser = Wifiuser.new(wifiuser_params)

    respond_to do |format|
      if @wifiuser.save
        format.html { redirect_to @wifiuser, notice: 'Wifiuser was successfully created.' }
        format.json { render :show, status: :created, location: @wifiuser }
      else
        format.html { render :new }
        format.json { render json: @wifiuser.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wifiusers/1
  # PATCH/PUT /wifiusers/1.json
  def update
    respond_to do |format|
      if @wifiuser.update(wifiuser_params)
        format.html { redirect_to @wifiuser, notice: 'Wifiuser was successfully updated.' }
        format.json { render :show, status: :ok, location: @wifiuser }
      else
        format.html { render :edit }
        format.json { render json: @wifiuser.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wifiusers/1
  # DELETE /wifiusers/1.json
  def destroy
    @wifiuser.destroy
    respond_to do |format|
      format.html { redirect_to wifiusers_url, notice: 'Wifiuser was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wifiuser
      @wifiuser = Wifiuser.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wifiuser_params
      params.require(:wifiuser).permit(:year, :month, :users, :gender, :nationality)
    end
end
