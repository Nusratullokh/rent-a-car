/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Registration Success:", values);

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center shadow-xl  ">
      <Form
        name="register"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 400, width: "100%", }}
        className="authShadow p-5 rounded-md pb-5"
      >
        <h1 className="text-3xl font-medium text-center mb-6">Register</h1>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="Enter your first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="Enter your last name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
