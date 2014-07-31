require 'test_helper'

class TraficgowexesControllerTest < ActionController::TestCase
  setup do
    @traficgowex = traficgowexes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:traficgowexes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create traficgowex" do
    assert_difference('Traficgowex.count') do
      post :create, traficgowex: { avrcv: @traficgowex.avrcv, avtr: @traficgowex.avtr, date: @traficgowex.date, hour: @traficgowex.hour, maxrcv: @traficgowex.maxrcv, maxtr: @traficgowex.maxtr, minrcv: @traficgowex.minrcv, mintr: @traficgowex.mintr }
    end

    assert_redirected_to traficgowex_path(assigns(:traficgowex))
  end

  test "should show traficgowex" do
    get :show, id: @traficgowex
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @traficgowex
    assert_response :success
  end

  test "should update traficgowex" do
    patch :update, id: @traficgowex, traficgowex: { avrcv: @traficgowex.avrcv, avtr: @traficgowex.avtr, date: @traficgowex.date, hour: @traficgowex.hour, maxrcv: @traficgowex.maxrcv, maxtr: @traficgowex.maxtr, minrcv: @traficgowex.minrcv, mintr: @traficgowex.mintr }
    assert_redirected_to traficgowex_path(assigns(:traficgowex))
  end

  test "should destroy traficgowex" do
    assert_difference('Traficgowex.count', -1) do
      delete :destroy, id: @traficgowex
    end

    assert_redirected_to traficgowexes_path
  end
end
