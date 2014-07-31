require 'test_helper'

class WificonsosControllerTest < ActionController::TestCase
  setup do
    @wificonso = wificonsos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:wificonsos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create wificonso" do
    assert_difference('Wificonso.count') do
      post :create, wificonso: { down_b: @wificonso.down_b, down_gb: @wificonso.down_gb, hours: @wificonso.hours, month: @wificonso.month, news: @wificonso.news, sessions: @wificonso.sessions, up_b: @wificonso.up_b, up_gb: @wificonso.up_gb, year: @wificonso.year }
    end

    assert_redirected_to wificonso_path(assigns(:wificonso))
  end

  test "should show wificonso" do
    get :show, id: @wificonso
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @wificonso
    assert_response :success
  end

  test "should update wificonso" do
    patch :update, id: @wificonso, wificonso: { down_b: @wificonso.down_b, down_gb: @wificonso.down_gb, hours: @wificonso.hours, month: @wificonso.month, news: @wificonso.news, sessions: @wificonso.sessions, up_b: @wificonso.up_b, up_gb: @wificonso.up_gb, year: @wificonso.year }
    assert_redirected_to wificonso_path(assigns(:wificonso))
  end

  test "should destroy wificonso" do
    assert_difference('Wificonso.count', -1) do
      delete :destroy, id: @wificonso
    end

    assert_redirected_to wificonsos_path
  end
end
