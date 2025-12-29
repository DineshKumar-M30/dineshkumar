import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { Card, Button, Input, Table, Badge } from '../components/UIComponents';
import { SERVICES } from '../data/mockData';
import { Plus, Trash2, Printer, CheckCircle2, Receipt, User } from 'lucide-react';

const Billing = () => {
    const { patients } = useHospital();
    const [selectedPatient, setSelectedPatient] = useState('');
    const [billItems, setBillItems] = useState([]);
    const [isPaid, setIsPaid] = useState(false);

    const addItem = (service) => {
        const existing = billItems.find(item => item.id === service.id);
        if (existing) {
            setBillItems(billItems.map(item =>
                item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setBillItems([...billItems, { ...service, quantity: 1 }]);
        }
    };

    const removeItem = (id) => {
        setBillItems(billItems.filter(item => item.id !== id));
    };

    const total = billItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = total * 0.1; // 10% GST
    const grandTotal = total + tax;

    const handleProcess = () => {
        setIsPaid(true);
        setTimeout(() => setIsPaid(false), 3000);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Billing & Invoicing</h1>
                    <p className="text-slate-500">Generate and manage patient invoices.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {/* Patient Selection & Service List */}
                    <Card title="Patient & Services">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Select Patient</label>
                                <div className="flex gap-4">
                                    <select
                                        className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        value={selectedPatient}
                                        onChange={(e) => setSelectedPatient(e.target.value)}
                                    >
                                        <option value="">Search patient...</option>
                                        {patients.map(p => (
                                            <option key={p.id} value={p.id}>{p.name} (#{p.id})</option>
                                        ))}
                                    </select>
                                    <Button variant="secondary">Search</Button>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <h4 className="text-sm font-bold text-slate-900 mb-4">Available Services</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {SERVICES.map((service) => (
                                        <div
                                            key={service.id}
                                            className="p-3 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-between group"
                                        >
                                            <div>
                                                <p className="font-medium text-slate-900 text-sm">{service.name}</p>
                                                <p className="text-xs text-slate-500">${service.price}</p>
                                            </div>
                                            <button
                                                onClick={() => addItem(service)}
                                                className="p-1.5 bg-slate-100 text-slate-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Current Bill Items */}
                    <Card title="Invoice Items">
                        <Table headers={['Service', 'Price', 'Qty', 'Subtotal', '']}>
                            {billItems.length > 0 ? (
                                billItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">${item.price}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">{item.quantity}</td>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900">${item.price * item.quantity}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-slate-400">No items added to bill yet.</td>
                                </tr>
                            )}
                        </Table>
                    </Card>
                </div>

                {/* Invoice Summary */}
                <div className="space-y-6">
                    <Card title="Order Summary">
                        <div className="space-y-4">
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span className="font-medium">${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Tax (GST 10%)</span>
                                <span className="font-medium">${tax.toFixed(2)}</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between">
                                <span className="text-lg font-bold text-slate-900">Total</span>
                                <span className="text-2xl font-black text-blue-600">${grandTotal.toFixed(2)}</span>
                            </div>

                            <div className="space-y-3 pt-6">
                                <Button
                                    className="w-full h-12 text-lg"
                                    onClick={handleProcess}
                                    disabled={billItems.length === 0 || !selectedPatient}
                                >
                                    {isPaid ? (
                                        <><CheckCircle2 className="w-5 h-5" /> Paid Successfully</>
                                    ) : (
                                        <><Receipt className="w-5 h-5" /> Process Payment</>
                                    )}
                                </Button>
                                <Button variant="outline" className="w-full h-12">
                                    <Printer className="w-5 h-5" /> Print Invoice
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {selectedPatient && (
                        <Card title="Patient Details">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">
                                        {patients.find(p => p.id === parseInt(selectedPatient))?.name}
                                    </p>
                                    <p className="text-xs text-slate-500">ID: #{selectedPatient}</p>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Billing;
