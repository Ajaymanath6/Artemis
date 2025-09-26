import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DocketHistoryEvent {
  id: string;
  date: string;
  time: string;
  eventType: 'Filing' | 'Motion' | 'Hearing' | 'Order' | 'Settlement' | 'Judgment' | 'Appeal';
  title: string;
  description: string;
  filedBy: string;
  judge?: string;
  document?: string;
  status: 'Completed' | 'Scheduled' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-docket-history-layout',
  imports: [CommonModule],
  templateUrl: './docket-history-layout.component.html',
  styleUrl: './docket-history-layout.component.css'
})
export class DocketHistoryLayoutComponent {
  @Input() caseDetails: any;

  docketHistory: DocketHistoryEvent[] = [
    {
      id: 'DH001',
      date: '15 January 2017',
      time: '09:30 AM',
      eventType: 'Filing',
      title: 'Initial Complaint Filed',
      description: 'Plaintiff filed initial complaint against State of New York challenging new environmental regulations',
      filedBy: 'Johnson Manufacturing Inc.',
      document: 'Initial_Complaint.pdf',
      status: 'Completed'
    },
    {
      id: 'DH002',
      date: '02 February 2017',
      time: '02:15 PM',
      eventType: 'Filing',
      title: 'Summons Issued',
      description: 'Court clerk issued summons to defendant',
      filedBy: 'Court Clerk',
      document: 'Summons.pdf',
      status: 'Completed'
    },
    {
      id: 'DH003',
      date: '28 February 2017',
      time: '11:45 AM',
      eventType: 'Motion',
      title: 'Motion to Dismiss Filed',
      description: 'Defendant filed motion to dismiss for lack of jurisdiction and failure to state a claim',
      filedBy: 'State Attorney General Office',
      judge: 'Hon. Sarah Mitchell',
      document: 'Motion_to_Dismiss.pdf',
      status: 'Completed'
    },
    {
      id: 'DH004',
      date: '15 March 2017',
      time: '10:00 AM',
      eventType: 'Hearing',
      title: 'Motion to Dismiss Hearing',
      description: 'Oral arguments heard on defendant\'s motion to dismiss',
      filedBy: 'Court',
      judge: 'Hon. Sarah Mitchell',
      status: 'Completed'
    },
    {
      id: 'DH005',
      date: '15 March 2017',
      time: '03:30 PM',
      eventType: 'Order',
      title: 'Motion to Dismiss Denied',
      description: 'Court denied defendant\'s motion to dismiss, case proceeds to discovery',
      filedBy: 'Court',
      judge: 'Hon. Sarah Mitchell',
      document: 'Order_Motion_Denied.pdf',
      status: 'Completed'
    },
    {
      id: 'DH006',
      date: '10 April 2017',
      time: '09:00 AM',
      eventType: 'Order',
      title: 'Discovery Order Issued',
      description: 'Court ordered discovery phase to commence with 180-day deadline',
      filedBy: 'Court',
      judge: 'Hon. Sarah Mitchell',
      document: 'Discovery_Order.pdf',
      status: 'Completed'
    },
    {
      id: 'DH007',
      date: '05 December 2017',
      time: '01:00 PM',
      eventType: 'Settlement',
      title: 'Settlement Conference Scheduled',
      description: 'Court scheduled mandatory settlement conference before trial',
      filedBy: 'Court',
      judge: 'Hon. Sarah Mitchell',
      status: 'Scheduled'
    }
  ];

  getEventIcon(eventType: string): string {
    const iconMap: { [key: string]: string } = {
      'Filing': 'ri-file-add-line',
      'Motion': 'ri-chat-3-line',
      'Hearing': 'ri-microphone-line',
      'Order': 'ri-file-text-line',
      'Settlement': 'ri-handshake-line',
      'Judgment': 'ri-scales-3-line',
      'Appeal': 'ri-arrow-up-circle-line'
    };
    return iconMap[eventType] || 'ri-information-line';
  }

  getEventTypeColor(eventType: string): string {
    const colorMap: { [key: string]: string } = {
      'Filing': '#059669',
      'Motion': '#dc2626',
      'Hearing': '#7c3aed',
      'Order': '#146B85',
      'Settlement': '#ea580c',
      'Judgment': '#374151',
      'Appeal': '#1d4ed8'
    };
    return colorMap[eventType] || '#6b7280';
  }

  onDocumentClick(document: string): void {
    console.log('Document clicked:', document);
    // Implement document download/view functionality
  }
}
