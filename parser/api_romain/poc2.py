from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_restplus import Api, Resource, fields
import os

app = Flask(__name__)
api = Api(app=app)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'poc.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

address_fields = api.model('Address', {
    'name': fields.String,
    'address': fields.String
})


from model import AddressModel, address_schema, addresses_schema
from model import CustomerModel, customer_schema, customers_schema
from model import BusinessModel, business_schema, businesses_schema
from model import ProductModel, product_schema, products_schema
from model import OrderModel, order_schema, orders_schema
from model import LineItemModel, line_item_schema, line_items_schema
from model import ReturnModel, return_schema, returns_schema


ns_address = api.namespace('addresses')
ns_customer = api.namespace('customers')
ns_business = api.namespace('businesses')
ns_product = api.namespace('products')
ns_order = api.namespace('orders')
ns_line_item = api.namespace('line_items')
ns_return = api.namespace('returns')


@ns_address.route("/")
class Address(Resource):
    def get(self):
        address = AddressModel.query.all()
        return addresses_schema.dump(address)

    @api.expect(address_fields)
    def post(self):
        address = AddressModel(request.json['name'],
                               request.json['address'])
        db.session.add(address)
        db.session.commit()
        return address_schema.dump(address)


@ns_address.route("/<int:id>")
class Address(Resource):
    def get(self, id):
        address = AddressModel.query.get(id)
        return address_schema.dump(address)

    @api.expect(address_fields)
    def put(self, id):
        address = AddressModel.query.get(id)
        address.name = request.json['name']
        address.address = request.json['address']
        db.session.commit()
        return address_schema.dump(address)

    def delete(self, id):
        address = CustomerModel.query.get(id)
        db.session.delete(address)
        db.session.commit()
        return customer_schema.dump(address)


customer_fields = api.model('Customer', {
    'name': fields.String,
    'email': fields.String,
    'billing_address': fields.Integer,
    'shipping_address': fields.Integer
})


@ns_customer.route("/")
class Customers(Resource):
    def get(self):
        customers = CustomerModel.query.all()
        return customers_schema.dump(customers)

    @api.expect(customer_fields)
    def post(self):
        customer = CustomerModel(request.json['name'],
                                 request.json['email'],
                                 request.json['billing_address'],
                                 request.json['shipping_address'])
        db.session.add(customer)
        db.session.commit()
        return customer_schema.dump(customer)


@ns_customer.route("/<int:id>")
class Customer(Resource):
    def get(self, id):
        customer = CustomerModel.query.get(id)
        return customer_schema.dump(customer)

    @api.expect(customer_fields)
    def put(self, id):
        customer = CustomerModel.query.get(id)
        customer.name = request.json['name']
        customer.email = request.json['email']
        customer.billing_address = request.json['billing_address']
        customer.shipping_address = request.json['shipping_address']
        db.session.commit()
        return customer_schema.dump(customer)

    def delete(self, id):
        customer = CustomerModel.query.get(id)
        db.session.delete(customer)
        db.session.commit()
        return customer_schema.dump(customer)


business_fields = api.model('Business', {
    'name': fields.String,
    'email': fields.String
})


@ns_business.route("/")
class Businesses(Resource):
    def get(self):
        businesses = BusinessModel.query.all()
        return businesses_schema.dump(businesses)

    @api.expect(business_fields)
    def post(self):
        business = BusinessModel(request.json['name'],
                                 request.json['email'])
        db.session.add(business)
        db.session.commit()
        return business_schema.dump(business)


@ns_business.route("/<int:id>")
class Business(Resource):
    def get(self, id):
        business = BusinessModel.query.get(id)
        return business_schema.dump(business)

    @api.expect(business_fields)
    def put(self, id):
        business = BusinessModel.query.get(id)
        business.name = request.json['name']
        business.email = request.json['email']
        db.session.commit()
        return business_schema.dump(business)

    def delete(self, id):
        business = BusinessModel.query.get(id)
        db.session.delete(business)
        db.session.commit()
        return business_schema.dump(business)


product_fields = api.model('Product', {
    'name': fields.String,
    'producer_id': fields.Integer
})


@ns_product.route("/")
class Products(Resource):
    def get(self):
        products = ProductModel.query.all()
        return products_schema.dump(products)

    @api.expect(product_fields)
    def post(self):
        product = ProductModel(request.json['name'],
                               request.json['producer_id'])
        db.session.add(product)
        db.session.commit()
        return product_schema.dump(product)


@ns_product.route("/<int:id>")
class Product(Resource):
    def get(self, id):
        product = ProductModel.query.get(id)
        return product_schema.dump(product)

    @api.expect(product_fields)
    def put(self, id):
        product = ProductModel.query.get(id)
        product.name = request.json['name']
        product.producer_id = request.json['producer_id']
        db.session.commit()
        return product_schema.dump(product)

    def delete(self, id):
        product = ProductModel.query.get(id)
        db.session.delete(product)
        db.session.commit()
        return product_schema.dump(product)


line_item_fields = api.model('LineItem', {
    'order_id': fields.Integer,
    'product_id': fields.Integer,
    'quantity': fields.Integer,
    'price': fields.Float
})


@ns_line_item.route("/")
class LineItems(Resource):
    def get(self):
        line_items = LineItemModel.query.all()
        return line_items_schema.dump(line_items)

    @api.expect(line_item_fields)
    def post(self):
        line_item = LineItemModel(request.json['order_id'],
                                  request.json['product_id'],
                                  request.json['quantity'],
                                  request.json['price'])
        db.session.add(line_item)
        db.session.commit()
        return line_item_schema.dump(line_item)


@ns_line_item.route("/<int:id>")
class LineItem(Resource):
    def get(self, id):
        line_item = LineItemModel.query.get(id)
        return line_item_schema.dump(line_item)

    @api.expect(line_item_fields)
    def put(self, id):
        line_item = LineItemModel.query.get(id)
        line_item.order_id = request.json['order_id']
        line_item.product_id = request.json['product_id']
        line_item.quantity = request.json['quantity']
        line_item.price = request.json['price']
        db.session.commit()
        return line_item_schema.dump(line_item)

    def delete(self, id):
        line_item = LineItemModel.query.get(id)
        db.session.delete(line_item)
        db.session.commit()
        return line_item_schema.dump(line_item)


order_fields = api.model('Order', {
    'customer_id': fields.Integer,
    'vendor_id': fields.Integer,
    'shipper_id': fields.Integer
})


@ns_order.route("/")
class Orders(Resource):
    def get(self):
        orders = OrderModel.query.all()
        return orders_schema.dump(orders)

    @api.expect(order_fields)
    def post(self):
        order = OrderModel(request.json['customer_id'],
                           request.json['vendor_id'],
                           request.json['shipper_id'])
        db.session.add(order)
        db.session.commit()
        return order_schema.dump(order)


@ns_order.route("/<int:id>")
class Order(Resource):
    def get(self, id):
        order = OrderModel.query.get(id)
        return order_schema.dump(order)

    @api.expect(order_fields)
    def put(self, id):
        order = OrderModel.query.get(id)
        order.customer_id = request.json['customer_id']
        order.vendor_id = request.json['vendor_id']
        order.shipper_id = request.json['shipper_id']
        db.session.commit()
        return order_schema.dump(order)

    def delete(self, id):
        order = OrderModel.query.get(id)
        db.session.delete(order)
        db.session.commit()
        return order_schema.dump(order)


return_fields = api.model('Return', {
    'order_id': fields.Integer,
    'shipper_id': fields.Integer
})


@ns_return.route("/")
class Returns(Resource):
    def get(self):
        returns = ReturnModel.query.all()
        return returns_schema.dump(returns)

    @api.expect(return_fields)
    def post(self):
        _return = ReturnModel(request.json['order_id'],
                              request.json['shipper_id'])
        db.session.add(_return)
        db.session.commit()
        return return_schema.dump(_return)


@ns_return.route("/<int:id>")
class Return(Resource):
    def get(self, id):
        _return = ReturnModel.query.get(id)
        return return_schema.dump(_return)

    @api.expect(return_fields)
    def put(self, id):
        _return = ReturnModel.query.get(id)
        _return.customer_id = request.json['order_id']
        _return.shipper_id = request.json['shipper_id']
        db.session.commit()
        return return_schema.dump(_return)

    def delete(self, id):
        _return = ReturnModel.query.get(id)
        db.session.delete(_return)
        db.session.commit()
        return return_schema.dump(_return)


@app.before_first_request
def init_db():
    db.create_all()


if __name__ == '__main__':
    app.run(debug=True)
