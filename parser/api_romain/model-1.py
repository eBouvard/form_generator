# Financial Status
# Paid at
# Fulfillment Status
# Fulfilled at
# Accepts Marketing
# Currency
# Subtotal
# Shipping
# Taxes
# Total
# Discount Code
# Discount Amount
# Shipping Method
# Created at
# Notes
# Note Attributes
# Cancelled at
# Payment Method
# Payment Reference
# Refunded Amount
# Vendor
# Outstanding Balance
# Employee
# Location
# Device ID
# Id
# Tags
# Risk Level
# Source
# LineItem discount
# Tax 1 Name
# Tax 1 Value
# Tax 2 Name
# Tax 2 Value
# Tax 3 Name
# Tax 3 Value
# Tax 4 Name
# Tax 4 Value
# Tax 5 Name
# Tax 5 Value
# Phone
# Receipt Number

from sqlalchemy import UniqueConstraint, ForeignKey

from poc import db, ma


# Billing Name OK
# Billing Street
# Billing Address1 OK
# Billing Address2 OK
# Billing Company
# Billing City
# Billing Zip
# Billing Province
# Billing Country
# Billing Phone

# Shipping Name OK
# Shipping Street
# Shipping Address1 OK
# Shipping Address2 OK
# Shipping Company
# Shipping City
# Shipping Zip
# Shipping Province
# Shipping Country
# Shipping Phone

class AddressModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    address = db.Column(db.String())

    def __init__(self, name, address):
        self.name = name
        self.address = address


class AddressSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'address')


address_schema = AddressSchema()
addresses_schema = AddressSchema(many=True)


# Name OK
# Email OK

class CustomerModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True)
    email = db.Column(db.String(), unique=True)
    billing_address = db.Column(db.Integer, ForeignKey('address_model.id'))
    shipping_address = db.Column(db.Integer, ForeignKey('address_model.id'))

    def __init__(self, name, email, billing_address, shipping_address):
        self.name = name
        self.email = email
        self.billing_address = billing_address
        self.shipping_address = shipping_address


class CustomerSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'email', 'billing_address', 'shipping_address')


customer_schema = CustomerSchema()
customers_schema = CustomerSchema(many=True)


class BusinessModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True)
    email = db.Column(db.String(), unique=True)

    def __init__(self, name, email):
        self.name = name
        self.email = email


class BusinessSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'email')


business_schema = BusinessSchema()
businesses_schema = BusinessSchema(many=True)


class ProductModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    producer_id = db.Column(db.Integer, ForeignKey('business_model.id'))
    __table_args__ = (UniqueConstraint('name', 'producer_id'),)

    def __init__(self, name, producer_id):
        self.name = name
        self.producer_id = producer_id


class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'producer_id')


product_schema = ProductSchema()
products_schema = ProductSchema(many=True)


# LineItem quantity OK
# LineItem name OK
# LineItem price OK
# LineItem compare at price
# LineItem sku
# LineItem requires shipping
# LineItem taxable
# LineItem fulfillment status

class LineItemModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, ForeignKey('order_model.id'))
    product_id = db.Column(db.Integer, ForeignKey('product_model.id'))
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float)

    def __init__(self, order_id, product_id, quantity, price):
        self.order_id = order_id
        self.product_id = product_id
        self.quantity = quantity
        self.price = price


class LineItemSchema(ma.Schema):
    class Meta:
        fields = ('id', 'order_id', 'product_id', 'quantity', 'price')


line_item_schema = LineItemSchema()
line_items_schema = LineItemSchema(many=True)


class OrderModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, ForeignKey('customer_model.id'))
    vendor_id = db.Column(db.Integer, ForeignKey('business_model.id'))
    shipper_id = db.Column(db.Integer, ForeignKey('business_model.id'))

    def __init__(self, customer_id, vendor_id, shipper_id):
        self.customer_id = customer_id
        self.vendor_id = vendor_id
        self.shipper_id = shipper_id


class OrderSchema(ma.Schema):
    class Meta:
        fields = ('id', 'customer_id', 'vendor_id', 'shipper_id')


order_schema = OrderSchema()
orders_schema = OrderSchema(many=True)


class ReturnModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, ForeignKey('order_model.id'))
    shipper_id = db.Column(db.Integer, ForeignKey('business_model.id'))

    def __init__(self, order_id, shipper_id):
        self.order_id = order_id
        self.shipper_id = shipper_id


class ReturnSchema(ma.Schema):
    class Meta:
        fields = ('id', 'order_id', 'shipper_id')


return_schema = ReturnSchema()
returns_schema = ReturnSchema(many=True)
