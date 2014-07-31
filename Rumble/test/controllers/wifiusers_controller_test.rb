require 'test_helper'

class WifiusersControllerTest < ActionController::TestCase
  setup do
    @wifiuser = wifiusers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:wifiusers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create wifiuser" do
    assert_difference('Wifiuser.count') do
      post :create, wifiuser: { gender: @wifiuser.gender, month: @wifiuser.month, nationality: @wifiuser.nationality, users: @wifiuser.users, year: @wifiuser.year }
    end

    assert_redirected_to wifiuser_path(assigns(:wifiuser))
  end

  test "should show wifiuser" do
    get :show, id: @wifiuser
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @wifiuser
    assert_response :success
  end

  test "should update wifiuser" do
    patch :update, id: @wifiuser, wifiuser: { gender: @wifiuser.gender, month: @wifiuser.month, nationality: @wifiuser.nationality, users: @wifiuser.users, year: @wifiuser.year }
    assert_redirected_to wifiuser_path(assigns(:wifiuser))
  end

  test "should destroy wifiuser" do
    assert_difference('Wifiuser.count', -1) do
      delete :destroy, id: @wifiuser
    end

    assert_redirected_to wifiusers_path
  end
end
